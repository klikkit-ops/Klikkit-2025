// Simple API testing script
// Run with: node test-apis.js

const testChatAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hello, what services do you offer?' })
    });
    
    const data = await response.json();
    console.log('✅ Chat API:', data.reply ? 'Working' : 'Failed');
    console.log('Response:', data.reply?.substring(0, 100) + '...');
  } catch (error) {
    console.log('❌ Chat API Error:', error.message);
  }
};

const testContactAPI = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        serviceInterest: 'Digital Launchpad',
        message: 'This is a test message'
      })
    });
    
    const data = await response.json();
    console.log('✅ Contact API:', data.success ? 'Working' : 'Failed');
    console.log('Response:', data.message);
  } catch (error) {
    console.log('❌ Contact API Error:', error.message);
  }
};

const runTests = async () => {
  console.log('🧪 Testing Klikkit 2025 APIs...\n');
  
  await testChatAPI();
  await testContactAPI();
  
  console.log('\n✅ API testing complete!');
  console.log('📝 Check your Supabase dashboard to see if data was saved.');
};

runTests();
