const sequentialOperations = async () => {
    try {
        const result1 = await new Promise(resolve => setTimeout(() => resolve(10), 1000));
        console.log('Result 1:', result1); // Logs after 1 second

        const result2 = await new Promise(resolve => setTimeout(() => resolve(result1 * 2), 1000));
        console.log('Result 2:', result2); // Logs after 2 seconds

        const result3 = await new Promise(resolve => setTimeout(() => resolve(result2 * 3), 1000));
        console.log('Result 3:', result3); // Logs after 3 seconds
    } catch (error) {
        console.error('Error:', error);
    }
};

sequentialOperations(); // Call the async arrow function


const parallelOperations = async () => {
    try {
        const [result1, result2, result3] = await Promise.all([
            new Promise(resolve => setTimeout(() => resolve(10), 1000)),
            new Promise(resolve => setTimeout(() => resolve(20), 2000)),
            new Promise(resolve => setTimeout(() => resolve(30), 3000))
        ]);

        console.log('Results:', result1, result2, result3); // Logs after 3 seconds
    } catch (error) {
        console.error('Error:', error);
    }
};

parallelOperations(); // Call the async arrow function
