export const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>, 
      setText: Function, 
      inputs: Object
    ) => {
    event.persist();
    const { name, value } = event.currentTarget;
    setText((inputs: Object) => ({ ...inputs, [name]: value }));
};