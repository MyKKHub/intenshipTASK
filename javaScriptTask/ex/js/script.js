const commentsPerPage = 50; 
const maxPages = 10;         
let currentPage = 1;         
let currentData = [];

        function displayComments() {
            const startIndex = (currentPage - 1) * commentsPerPage;
            const endIndex = startIndex + commentsPerPage;

            const commentList = document.getElementById('commentList');
            commentList.innerHTML = ''; 

            for (let i = startIndex; i < endIndex && i < currentData.length; i++) {
                const comment = currentData[i];
                const card = document.createElement('div');
                card.className = 'col-md-6 mb-4';

                card.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${comment.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Email: ${comment.email}</h6>
                            <p class="card-text">Comment: ${comment.body}</p>
                        </div>
                    </div>
                `;

                commentList.appendChild(card);
            }
        }

        function createPagination() {
            const numPages = Math.min(maxPages, Math.ceil(currentData.length / commentsPerPage));
            const pagination = document.getElementById('pagination');
            pagination.innerHTML = '';

            for (let page = 1; page <= numPages; page++) {
                const listItem = document.createElement('li');
                listItem.className = 'page-item';
                const link = document.createElement('a');
                link.className = 'page-link';
                link.textContent = page;
                link.href = '#';

                link.addEventListener('click', function () {
                    currentPage = page;
                    displayComments();
                    createPagination();
                });

                listItem.appendChild(link);
                pagination.appendChild(listItem);
            }
        }

        function handleSearch() {
            const searchQuery = document.getElementById('commentSearch').value.toLowerCase();
            currentData = data.filter(comment =>
                comment.name.toLowerCase().includes(searchQuery) ||
                comment.email.toLowerCase().includes(searchQuery) ||
                comment.body.toLowerCase().includes(searchQuery)
            );
            currentPage = 1;
            displayComments();
            createPagination();
        }

       
        const data = [];

        function fetchComments() {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(responseData => {
                    data.push(...responseData);
                    currentData = data;
                    displayComments();
                    createPagination();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        
        fetchComments();

        
        const commentSearch = document.getElementById('commentSearch');
        commentSearch.addEventListener('input', handleSearch);

       
