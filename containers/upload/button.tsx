import React, { useEffect, useState } from 'react';
import { Button } from '../../components';

interface IProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const UploadButton: React.FC<IProps>= ({ onClick }) => {
    return (
        <Button
        id="primary-button"
        name="simple"
        type="primary"
        title="Primary button"
        label="Primary button"
        onClick={onClick}
  />
    )
}

export default UploadButton;