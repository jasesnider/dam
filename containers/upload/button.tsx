import React, { useEffect, useState } from 'react';
import { Button } from '../../components';

interface IProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UploadButton: React.FC<IProps>= ({ onClick }) => {
    return (
        <Button
        id="upload-button"
        name="simple"
        type="primary"
        title="Upload button"
        label="Upload"
        onClick={onClick}
  />
    )
}

export default UploadButton;