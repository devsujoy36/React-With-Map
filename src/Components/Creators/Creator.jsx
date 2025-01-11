/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Creator = ({ creator }) => {
    console.log(creator);
    const { id, name, img, alias, profession, date_of_birth, nationality, notable_for, social_media, businesses, philanthropy,achievements } = creator;

    const {youtube,twitter,instagram} = social_media;


    return (
        <div></div>
    )
}

export default Creator