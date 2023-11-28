import React from 'react';
import PropTypes from 'prop-types';

function AppCard({ appObject }) {
  const openPopupWindow = () => {
    const popupFeatures = 'width=400,height=300,scrollbars=yes,resizable=yes';
    const popupWindow = window.open('', '_blank', popupFeatures);
    
    // Customize the content inside the new popup window
    const popupContent = `
      <html>
      <head>
        <title>${appObject.name} Details</title>
      </head>
      <body>
        <img src="app_images/${appObject.imageName}" alt="${appObject.name} Image" style="max-width: 100%; height: auto;">
        <h2>${appObject.name}</h2>
        <h3>${appObject.organization}</h3>
        <p>${appObject.description}</p>
        <button onclick="window.close()">Close</button>
      </body>
      </html>
    `;

    popupWindow.document.write(popupContent);
  };

  
  const imagePath = "app_images/" + appObject.imageName;
  return (
    <div>
      {/* Card Content */}
      <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-xs">
        {/* Image */}
        <div className="mx-auto mb-4">
          <img src={imagePath} alt="AppIcon" className="w-full object-contain h-72" />
        </div>
        {/* App name */}
        <h3 className="text-xl font-semibold mb-2 text-center">{appObject.name}</h3>
        {/* Company name */}
        <p className="text-sm text-center">{appObject.organization}</p>
      </div>

      {/* Trigger to open the smaller popup window */}
      <div className="popup-trigger" onClick={openPopupWindow}>
        Click to view details
      </div>
    </div>
  );
}

AppCard.propTypes = {
  appObject: PropTypes.object.isRequired,
};

export default AppCard;
