import { Control, Controller, useForm } from "react-hook-form";
import { ITypes, rules } from "../../../core-module/models/control-models";
import { useEffect, useRef, useState } from "react";
import "./select-box.component.scss";
import useClickOutside from "../../hooks/click-outside.hook";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TextBoxComponent from "../app-text-box/app-text-box.component";

function SelectBoxComponent (props: {control: Control<any>, name: string, list: ITypes[], isUpperCase?: boolean, rules?: rules, withSearch?: boolean }) {
    const { control, watch } = useForm<any>({
        defaultValues: {
            search: null
        }
    })
    const [isListOpened, setIsListOpened] = useState(false);
    const elRef = useRef<any>(null);
    const searchRef = useRef<any>(null);
    const [filteredList, setFilteredList] = useState(props.list);
    useClickOutside(elRef, setIsListOpened);

    const changeListState = (event: MouseEvent) => {
        setIsListOpened((searchRef?.current?.contains(event.target) || !isListOpened) ? true : false);
    };

    useEffect(() => {
        const subscription = watch((data) => {
            setFilteredList(filterList(props.list, data.search));
        });
        return () => {
            subscription.unsubscribe();
        }
    }, []);

    const filterList = (list: ITypes[], searchValue: string | null): ITypes[] => {
        return searchValue 
        ? list.filter((item) => item.value.toUpperCase().includes(searchValue.toUpperCase())) 
        : list;
    }

    return (
        <div className="select-box-wrapper">
            <Controller
                name={props.name}
                control={props.control}
                rules={props.rules}
                defaultValue={null}
                render={({ field }) => (
                    <div className="select-box" ref={elRef} onClick={(event: any) => changeListState(event)}>
                        <div className="select-label-row">
                            <div>{field?.value?.value ? field.value.value : "Not selected"}</div>
                            {isListOpened ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </div>
                        {isListOpened && <ul className="select-list">
                            {props.withSearch &&
                            <div ref={searchRef} className="search-block">
                                <TextBoxComponent control={control} name="search" />
                            </div>
                            }
                            {filteredList.length ? filteredList.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => field.onChange(item)}>{item.value}</li>
                                );
                            })
                            : <div className="no-data">No data</div>
                            }
                        </ul>}
                    </div>
                )}
            />
        </div>
    );
}

export default SelectBoxComponent;
