import {useState, useCallback} from 'react';

export default function useForm<T>(initialForm: T) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((name, value) => {
    setForm((form: T) => ({...form, [name]: value}));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}
