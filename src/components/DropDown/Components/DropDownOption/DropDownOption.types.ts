import {Option} from '../../DropDown.types';

export interface OptionComponentProps {
  option: Option;
  selectedValues: Option[];
  multiSelect: boolean;
  handleOptionSelect: (option: Option) => void;
}
