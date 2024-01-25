import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { MdPreview } from 'react-icons/md';

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      setImage(URL.createObjectURL(file));
      setDialogVisible(true);
    } else {
      setImage(null);
      setDialogVisible(false);
    }
  };

  const onHide = () => {
    setDialogVisible(false);
  };

  return (
    <div className='profile_img text-center p-4'>
      <div className='flex flex-col justify-center items-center'>
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid green",
            cursor: "pointer", // Add cursor pointer for indicating clickability
          }}
          src={image}
          alt="Profile"
          onClick={() => setDialogVisible(true)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          name=""
          id=""
        />

        {/* <Dialog
          header="Preview"
          visible={dialogVisible}
          style={{ width: "50vw" }}
          onHide={onHide}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src={image}
            alt="Preview"
          />
        </Dialog> */}
      </div>
    </div>
  );
};

export default ProfilePicture;
