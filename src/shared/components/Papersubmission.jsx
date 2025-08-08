import { Upload } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


function Papersubmission() {
    const [fileName, setFileName] = useState('Choose Your File');

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');


    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        const journalName = 'icabcic';
        // Generate unique ID: journalName + YYYYMMDD + HHMMSS
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
        const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, ''); // HHMMSS
        const uniqueId = `${journalName}_${dateStr}_${timeStr}`;

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Submission_ID', uniqueId);
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const googleSheetsParams = new URLSearchParams();
            googleSheetsParams.append('Submission_ID', uniqueId);
            googleSheetsParams.append('journal_name', journalName);
            googleSheetsParams.append('Paper_Title', formData.Paper_Title);
            googleSheetsParams.append('Author_FUll_Name', formData.Author_FUll_Name);
            googleSheetsParams.append('Email_Address', formData.Email_Address);
            googleSheetsParams.append('Institution_Name', formData.Institution_Name);
            googleSheetsParams.append('Paper_Track', formData.Paper_Track);

            const mailPromise = fetch('https://icabcic.org/api/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const sheetsPromise = fetch('https://script.google.com/macros/s/AKfycbwZ_TtKUqAfcue9TNCKy57hTrCKDUP5dTQnWbpSxBDzlRMllEuOoaxzRDl0kQPah5pZ/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: googleSheetsParams.toString(),
            });

            const [mailResponse, sheetsResponse] = await Promise.allSettled([mailPromise, sheetsPromise]);

            const mailSuccess = mailResponse.status === 'fulfilled' && mailResponse.value.ok;
            const sheetsSuccess = sheetsResponse.status === 'fulfilled';

            if (sheetsResponse.status === 'rejected') {
                console.error('Sheets request failed:', sheetsResponse.reason);
            }

            if (mailSuccess && sheetsSuccess) {
                setStatus(`Submission successful! Data sent to both email and Google Sheets (${journalName}). Submission ID: ${uniqueId}`);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                setFileName('');
                const fileInput = document.getElementById('Paper_File');
                if (fileInput) {
                    fileInput.value = '';
                } else {
                    console.error('Element with ID "Paper_File" not found.');
                }
                toast.success(`Paper submitted successfully!`);

            } else if (mailSuccess && !sheetsSuccess) {
                setStatus('Email sent successfully, but there might be an issue with Google Sheets.');
                toast.warning('Email sent successfully. Please check if data was saved to Google Sheets.');

            } else if (!mailSuccess && sheetsSuccess) {
                setStatus('Data likely saved to Google Sheets, but failed to send email.');
                toast.warning('Data might be saved to Google Sheets, but failed to send email.');

            } else {
                setStatus('There might be issues with the submission. Please check manually.');
                toast.error('Submission completed, but please verify the results manually.');
            }

        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred during submission. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    }
    return (
        <div>
            <section className="bg-white text-[#1e1b4b] mt-10 py-20">
                <div className="container mx-auto px-4 md:px-12 lg:px-24">
                    <div className="text-center mb-8 md:mb-16">
                        <div className="text-2xl md:text-3xl  poppins-bold leading-tight mb-4">
                            New Paper Submission
                        </div>
                        <p className="text-lg lg:text-lg max-w-2xl mx-auto poppins-medium">
                            Submit your research paper by filling out the form below. Ensure you follow the submission guidelines.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 border-2 border-[#1e1b4b] rounded-lg shadow-lg flex flex-col justify-center items-center text-left order-first lg:order-last">
                            <div className="text-2xl poppins-bold mb-6">Submission Guidelines</div>
                            <ul className="list-disc space-y-8 text-lg  poppins-medium pl-4 leading-snug">
                                <li>Provide the title of your paper, which should be descriptive and concise.</li>
                                <li>Enter the full name of the first author as it appears on the paper.</li>
                                <li>Enter a valid mobile number (10-15 digits, country code optional).</li>
                                <li>Provide a working email address for the first author to receive notifications.</li>
                                <li>Enter the name of the institution the first author is affiliated with.</li>
                                <li>Choose the relevant category for the first author.</li>
                                <li>Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 border-2 border-[#1e1b4b] rounded-lg shadow-lg order-last lg:order-first">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6">
                                    <div className="form-group text-lg poppins-medium">
                                        <label htmlFor="Paper_Title" className="block mb-2 text-lg lg:text-lg">
                                            Paper Title <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="Paper_Title"
                                            name="Paper_Title"
                                            value={formData.Paper_Title}
                                            onChange={handleFileInputChange}
                                            placeholder="Enter your paper title"
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-lg poppins-medium">
                                        <label htmlFor="Author_FUll_Name" className="block mb-2 text-lg lg:text-lg">
                                            Author Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id='Author_FUll_Name'
                                            name="Author_FUll_Name"
                                            value={formData.Author_FUll_Name}
                                            onChange={handleFileInputChange}
                                            placeholder="Enter author's full name"
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-1 gap-6">
                                    {/* <div className="form-group text-lg poppins-medium">
                                        <label htmlFor="mobile" className="block mb-2 text-lg lg:text-lg">
                                            Mobile Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleFileInputChange}
                                            placeholder="Enter author's mobile number"
                                            pattern="^\+?\d{10,15}$"
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                            type="tel"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">Format: 10-15 digits</p>
                                    </div> */}

                                    <div className="form-group text-lg poppins-medium">
                                        <label for="Institution_Name" className="block mb-2 text-lg lg:text-lg">
                                            Institution Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id='Institution_Name'
                                            name="Institution_Name"
                                            value={formData.Institution_Name}
                                            onChange={handleFileInputChange}
                                            placeholder="Enter your institution name"
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                            type="text"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-group text-lg poppins-medium">
                                        <label htmlFor="Email_Address" className="block mb-2 text-lg lg:text-lg">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id='Email_Address'
                                            name="Email_Address"
                                            value={formData.Email_Address}
                                            onChange={handleFileInputChange}
                                            placeholder="Enter author's email address"
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                            type="email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group text-lg poppins-medium">
                                        <label htmlFor="Paper_Track" className="block mb-2 text-lg lg:text-lg">
                                            Category
                                        </label>
                                        <select
                                            id='Paper_Track'
                                            name="Paper_Track"
                                            value={formData.Paper_Track}
                                            onChange={handleFileInputChange}
                                            className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1b4b]"
                                        >
                                            <option value="">Select your category</option>
                                            <option value="Big Data Analytics">Big Data Analytics</option>
                                            <option value="AI & Machine Learning">AI & Machine Learning</option>
                                            <option value="Cloud Computing">Cloud Computing</option>
                                            <option value="Cybersecurity & Blockchain">Cybersecurity & Blockchain</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group text-lg poppins-medium">
                                    <label htmlFor="paperFile" className="block mb-2 text-lg lg:text-lg">
                                        Upload Paper <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#1e1b4b] transition-colors">
                                        <div className="space-y-1 text-center">

                                            <div className="flex text-base sm:text-lg text-black">
                                                <label htmlFor="Paper_File" className="relative cursor-pointer rounded-md poppins-medium text-blue-400 hover:text-blue-300">
                                                    <input
                                                        id='Paper_File'
                                                        name="Paper_File"
                                                        type="file"
                                                        accept=".pdf,.doc,.docx"
                                                        className="sr-only"
                                                        onChange={handleFileInputChange}
                                                        required
                                                    />
                                                    <div className="space-y-4">
                                                        <div className=" flex items-center justify-center ">
                                                            <Upload className="w-8 h-8 text-[#1e1b4b]" />
                                                        </div>
                                                        <div>
                                                            <p className="text-lg poppins-semibold text-gray-700 mb-2">
                                                                {fileName || "Click to Upload Paper"}
                                                            </p>
                                                            <p className="text-sm poppins-medium  text-gray-500">
                                                                PDF, DOC, or DOCX files only (Max 5MB)
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden w-fit rounded-lg">
                                    <button
                                        type="submit"
                                        className="px-5 py-2 bg-[#1e1b4b] text-white leading-10 poppins-semibold cursor-pointer text-lg rounded-lg shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Papersubmission