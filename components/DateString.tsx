/* DateString component is to display localized dates
    If the app tries to display localized date strings, server and client side locales will mismatch and hydration errors will occur.
    Therefore, we customize the displayed date string after initial load
 */

"use client";
import React, { FC, useEffect, useState } from "react";

type DateStringProps = {
	date: Date;
	initEmpty?: boolean;
};

const DateString: FC<DateStringProps> = ({ date, initEmpty }) => {
	const [dateDisplayStr, setDateDisplayStr] = useState<string>(
		initEmpty === true ? "" : date.toDateString(),
	);
	useEffect(() => {
		//After browser loaded, change to locale string
		setDateDisplayStr(date.toLocaleDateString());
	}, []);
	return <>{dateDisplayStr}</>;
};

export default DateString;
