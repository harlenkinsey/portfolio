import React from 'react';
    
    const YoutubeEmbed = ({ embedId }) => (
      <div>
        <iframe
          src={`https://www.youtube.com/embed/${embedId}`}
          width="100%"
          height="auto"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className="video-responsive"
        />
      </div>
    );
    
    export default YoutubeEmbed;