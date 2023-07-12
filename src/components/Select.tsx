import Select from 'react-select'

interface Option {
  value: string,
  label: string
}

interface SelectProps {
  options: Option[]
}

const StyledSelect = ({ option }: SelectProps) => {
  return (
    <Select />
  )
}

export default StyledSelect;
