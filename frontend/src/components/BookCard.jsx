import React from 'react';

const BookCard = ({ title, author, releaseDate, coverImage, goodreadsLink, amazonLink, authorWebsite }) => {
    return (
        <div className="book-card">
            <img src={coverImage} alt={`Cover of ${title}`} className="book-cover" />
            <h3>{title}</h3>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Release Date:</strong> {releaseDate}</p>
            <div className="links">
                <a href={goodreadsLink} target="_blank" rel="noopener noreferrer">Goodreads</a> |
                <a href={amazonLink} target="_blank" rel="noopener noreferrer">Amazon</a> |
                <a href={authorWebsite} target="_blank" rel="noopener noreferrer">Author Website</a>
            </div>
        </div>
    );
};

export default BookCard;