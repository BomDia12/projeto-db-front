import Select from 'react-select'
import { Option } from '../utils/models';

interface SelectProps {
  options: Option[];
  onChange(option: Option | null): void;
  placeholder?: string;
}

const StyledSelect = ({ options, onChange, placeholder }: SelectProps) => {
  return (
    <Select
      options={options}
      styles={{
        control: (base, props) => ({
          ...base,
          borderColor: props.isFocused ? '#9B1D20' : '#DAB785',
          border: '2px solid',
          width: '20vw'
        }),
        container: (base, props) => ({
          ...base,
          border: 0
        }),
      }}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default StyledSelect;
