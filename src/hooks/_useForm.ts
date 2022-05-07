import {useState, useCallback} from 'react';

export default function _useForm<T>(initialForm: T) {
  const [formData, setFormData] = useState(initialForm);

  const resetFormData = useCallback(
    () => setFormData(initialForm),
    [initialForm],
  );

  const onChangeFormData = useCallback((name: string, value) => {
    setFormData((form: T) => ({...form, [name]: value}));
  }, []);

  return [formData, resetFormData, onChangeFormData];
}
