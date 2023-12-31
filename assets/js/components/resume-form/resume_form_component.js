export const ResumeFormComponent = () => {
    return `
        <div class="container green-container">
        <h2 class="mb-4">Apply for the job</h2>
        <form id="myForm">
                <div class="form-container">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        >
                    </div>
                    <div class="form-group">
                    <label for="surname">Surname</label>
                    <input
                        type="surname"
                        id="surname"
                        name="surname"
                        placeholder="Enter your Surname"
                        required
                    >
                </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        >
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div class="form-group">
                    <label class="" for="pdf">PDF Attachment</label>
                    <input
                        type="file"
                        class="form-control-file"
                        id="pdf"
                        accept=".pdf"
                        required
                    >
                </div>
                   
                    <button
                        class="custom-btn"
                        type="submit"
                    >Submit</button>
            </div>
        </form>
        </div>
`
}