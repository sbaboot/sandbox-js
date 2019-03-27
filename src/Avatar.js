import React from 'react';

class Avatar extends React.Component {
  render() {
    const { image, firstName, lastName, surnom, description, isJS } = this.props;

    return (
      <div className='container my-4'>
        <div className={isJS ? "" : "java"}>
          {image ? <img style={{
            maxWidth: '25%'
          }}
            src={image}
            alt={firstName}
          /> : <img src="https://www.drupal.org/files/issues/default-avatar.png" />}
          <h5 className="card-title">{firstName} {lastName} alias {surnom}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    )
  }

}

export default Avatar;