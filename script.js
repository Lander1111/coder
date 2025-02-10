const correctPassword = '9812';

function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const loginSection = document.getElementById('login-section');
    const appSection = document.getElementById('app-section');
    const errorMessage = document.getElementById('error-message');

    if (passwordInput === correctPassword) {
        loginSection.style.display = 'none';
        appSection.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

function updatePreview() {
    const userPrompt = document.getElementById('user-prompt').value;
    const codePreview = document.getElementById('code-preview');

    // For simplicity, we'll just echo the prompt back as code.
    // In a real-world scenario, you'd integrate with an AI service to generate actual code.
    const previewCode = `// Preview of generated code based on user prompt:\n\n${userPrompt}`;
    codePreview.textContent = previewCode;
}

function generateCode() {
    const userPrompt = document.getElementById('user-prompt').value;
    const codeOutput = document.getElementById('code-output');

    // For simplicity, we'll just echo the prompt back as code.
    // In a real-world scenario, you'd integrate with an AI service to generate actual code.
    const generatedCode = `// Generated code based on user prompt:\n\n${userPrompt}`;
    codeOutput.textContent = generatedCode;
}