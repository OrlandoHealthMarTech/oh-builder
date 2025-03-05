import React from "react";

// Define the type for the component's props
interface MyComponentProps {
  label: string;
  onClick: () => void;
}

// Annotate the component with the props type
const MyComponent: React.FC<MyComponentProps> = ({ label, onClick }) => {
  return <div>My Component</div>;
};

export default MyComponent;
