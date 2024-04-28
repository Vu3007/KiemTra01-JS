// Function to fetch data from API and display in the list
async function fetchData(resource) {
    // Clear the list
    document.getElementById('dataList').innerHTML = '';

    // Highlight the active button
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById(`${resource}Btn`).classList.add('active');

    try {
        // Fetch data from API
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
        const data = await response.json();

        // Display data in the list
        const dataList = document.getElementById('dataList');
        data.forEach(function(item) {
            const listItem = document.createElement('li');
            listItem.textContent = item.title || item.name;
            dataList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch posts data by default when the page loads
window.onload = fetchData('posts');
