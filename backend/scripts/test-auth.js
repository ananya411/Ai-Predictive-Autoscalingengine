const axios = require('axios');

const API_URL = 'http://localhost:5000/api/auth';
const testUser = {
    email: `test${Date.now()}@example.com`,
    password: 'password123'
};

async function testAuth() {
    console.log('Starting Authentication Tests...');

    try {
        // 1. Test Signup
        console.log('\nTesting Signup...');
        const signupRes = await axios.post(`${API_URL}/signup`, testUser);
        if (signupRes.status === 201 && signupRes.data.token) {
            console.log('✅ Signup Successful');
        } else {
            console.error('❌ Signup Failed:', signupRes.data);
        }

        // 2. Test Duplicate Signup (Should Fail)
        console.log('\nTesting Duplicate Signup...');
        try {
            await axios.post(`${API_URL}/signup`, testUser);
            console.error('❌ Duplicate Signup Failed (Should have returned error)');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('✅ Duplicate Signup Handled Correctly');
            } else {
                console.error('❌ Duplicate Signup Error:', error.message);
            }
        }

        // 3. Test Signin
        console.log('\nTesting Signin...');
        const signinRes = await axios.post(`${API_URL}/signin`, testUser);
        if (signinRes.status === 200 && signinRes.data.token) {
            console.log('✅ Signin Successful');
        } else {
            console.error('❌ Signin Failed:', signinRes.data);
        }

        // 4. Test Invalid Signin
        console.log('\nTesting Invalid Signin...');
        try {
            await axios.post(`${API_URL}/signin`, { email: testUser.email, password: 'wrongpassword' });
            console.error('❌ Invalid Signin Failed (Should have returned error)');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                console.log('✅ Invalid Signin Handled Correctly');
            } else {
                console.error('❌ Invalid Signin Error:', error.message);
            }
        }

    } catch (error) {
        console.error('❌ valid Signup/Signin Error:', error.response ? error.response.data : error.message);
    }
}

testAuth();
