
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const studentTab = document.getElementById('studentTab');
    const institutionTab = document.getElementById('institutionTab');
    
    const studentLoginBox = document.getElementById('studentLoginBox');
    const studentSignupBox = document.getElementById('studentSignupBox');
    const institutionLoginBox = document.getElementById('institutionLoginBox');
    const institutionSignupBox = document.getElementById('institutionSignupBox');
    
    const showStudentSignup = document.getElementById('showStudentSignup');
    const showStudentLogin = document.getElementById('showStudentLogin');
    const showInstitutionSignup = document.getElementById('showInstitutionSignup');
    const showInstitutionLogin = document.getElementById('showInstitutionLogin');
    
    const studentLoginForm = document.getElementById('studentLoginForm');
    const studentSignupForm = document.getElementById('studentSignupForm');
    const institutionLoginForm = document.getElementById('institutionLoginForm');
    const institutionSignupForm = document.getElementById('institutionSignupForm');
    
    // Student Auth Navigation
    showStudentSignup.addEventListener('click', function(e) {
        e.preventDefault();
        studentLoginBox.style.display = 'none';
        studentSignupBox.style.display = 'block';
    });

    showStudentLogin.addEventListener('click', function(e) {
        e.preventDefault();
        studentSignupBox.style.display = 'none';
        studentLoginBox.style.display = 'block';
    });

    // Institution Auth Navigation
    showInstitutionSignup.addEventListener('click', function(e) {
        e.preventDefault();
        institutionLoginBox.style.display = 'none';
        institutionSignupBox.style.display = 'block';
    });

    showInstitutionLogin.addEventListener('click', function(e) {
        e.preventDefault();
        institutionSignupBox.style.display = 'none';
        institutionLoginBox.style.display = 'block';
    });

    // Student Login Form Submission
    studentLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('studentLoginEmail').value;
        
        // Simple validation
        if (!email || !document.getElementById('studentLoginPassword').value) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        const loginBtn = this.querySelector('button');
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        loginBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            window.location.href = "student.html";
        }, 1500);
    });

    // Student Signup Form Submission
    studentSignupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('studentSignupName').value;
        const email = document.getElementById('studentSignupEmail').value;
        const password = document.getElementById('studentSignupPassword').value;
        const confirm = document.getElementById('studentSignupConfirm').value;
        const studentId = document.getElementById('studentSignupId').value;
        
        // Validation
        if (!name || !email || !password || !confirm || !studentId) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirm) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters');
            return;
        }
        
        // Show loading state
        const signupBtn = this.querySelector('button');
        signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        signupBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            window.location.href = "student.html";
        }, 2000);
    });

    // Institution Login Form Submission
    institutionLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('institutionLoginEmail').value;
        
        // Simple validation
        if (!email || !document.getElementById('institutionLoginPassword').value) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        const loginBtn = this.querySelector('button');
        loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        loginBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            window.location.href = "college.html";
        }, 1500);
    });

    // Institution Signup Form Submission
    institutionSignupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('institutionSignupName').value;
        const email = document.getElementById('institutionSignupEmail').value;
        const password = document.getElementById('institutionSignupPassword').value;
        const confirm = document.getElementById('institutionSignupConfirm').value;
        const code = document.getElementById('institutionSignupCode').value;
        
        // Validation
        if (!name || !email || !password || !confirm || !code) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirm) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        
        // Show loading state
        const signupBtn = this.querySelector('button');
        signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        signupBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            window.location.href = "college.html";
        }, 2000);
    });

    // Form input animations
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            const icon = this.parentElement.querySelector('i');
            if (this.closest('#studentLoginBox, #studentSignupBox')) {
                icon.style.color = 'var(--primary)';
            } else {
                icon.style.color = 'var(--institution)';
            }
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('i').style.color = 'var(--gray)';
        });
    });
});