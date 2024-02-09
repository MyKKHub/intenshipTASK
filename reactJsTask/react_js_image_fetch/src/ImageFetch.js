import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


function ImageFetch() {
  const imageItemStyle = {
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#555',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const itemsPerPage = 12;
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  const columns = () => {
    const width = window.innerWidth;
    if (width >= 992) return 3;
    else if (width >= 768) return 2;
    return 1;
  };

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedImages = images.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const displayPages = (totalPages, currentPage) => {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);
    const pages = [1, currentPage - halfVisiblePages];

    if (currentPage - halfVisiblePages > 2) {
      pages.push(-1);
    }

    for (let i = currentPage - halfVisiblePages + 1; i < currentPage + halfVisiblePages; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    if (currentPage + halfVisiblePages < totalPages - 1) {
      pages.push(-1);
    }

    pages.push(totalPages);

    return pages;
  };

  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  };

  const pageButtonStyles = {
    margin: '0 4px',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const backwardButtonStyles = {
    ...pageButtonStyles,
    backgroundColor: currentPage === 1 ? 'transparent' : '#007BFF',
    color: currentPage === 1 ? '#000' : '#fff',
    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
  };

  const forwardButtonStyles = {
    ...pageButtonStyles,
    backgroundColor: currentPage === totalPages ? 'transparent' : '#007BFF',
    color: currentPage === totalPages ? '#000' : '#fff',
    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
  };

  return (
    <div className="container">
      
      <Grid container spacing={2}>
        {paginatedImages.map((image) => (
          <Grid key={image.id} item xs={12} sm={6} md={3} lg={columns()}>
            <Paper style={imageItemStyle}>
              <img src={image.thumbnailUrl} alt={image.title} />
              <Typography variant="subtitle1">{image.title}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      

      <div style={pageStyles}>
        <button onClick={() => handlePageChange(currentPage - 1)} style={backwardButtonStyles} disabled={currentPage === 1}>
          &laquo; Backward
        </button>
        {displayPages(totalPages, currentPage).map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            style={{
              ...pageButtonStyles,
              backgroundColor: currentPage === page ? '#007BFF' : 'transparent',
              color: currentPage === page ? '#fff' : '#000',
            }}
          >
            {page === -1 ? '...' : page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          style={forwardButtonStyles}
          disabled={currentPage === totalPages}
        >
          Forward &raquo;
        </button>
      </div>
    </div>
    
  );
}

export default ImageFetch;
