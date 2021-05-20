import React, { HTMLAttributes } from 'react';
import { useColorMode } from '@chakra-ui/react';

import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'D:/Javascript/ims_frontend/src/PageComponents/ItemDashboard/datepicker.css';

const DatePicker = (
	{ selectedDate, onChange, isClearable = false, showPopperArrow = false, ...props },
	HTMLAttributes
) => {
	const isLight = useColorMode().colorMode === 'light';
	return (
		// if you don't want to use chakra's colors or you just wwant to use the original ones,
		// set className to "light-theme-original" ↓↓↓↓
		<div className={isLight ? 'light-theme' : 'dark-theme'}>
			<ReactDatePicker
				selected={selectedDate}
				onChange={onChange}
				isClearable={isClearable}
				showPopperArrow={showPopperArrow}
				className="react-datapicker__input-text" //input is white by default and there is no already defined class for it so I created a new one
				{...props}
			/>
		</div>
	);
};

export default DatePicker;
