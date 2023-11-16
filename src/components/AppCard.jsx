import PropTypes from 'prop-types';

function AppCard({ appObject }) {

    const imagePath = "app_images/" + appObject.imageName;

    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-6 mx-auto max-w-xs">
                {/* Image */}
                <div className="mx-auto mb-4">
                    <img src={imagePath} alt="AppIcon" className="w-full object-cover h-72"/>
                </div>
                {/* App name */}
                <h3 className="text-xl font-semibold mb-2 text-center">{appObject.name}</h3>
                {/* Company name */}
                <p className="text-sm text-center">{appObject.organization}</p>
            </div>
        </>
    );
}

AppCard.propTypes = {
    appObject: PropTypes.object.isRequired, // or PropTypes.number, PropTypes.bool, etc.
};

export default AppCard;
