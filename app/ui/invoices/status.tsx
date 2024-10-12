import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Fragment } from "react";

export default function InvoiceStatus({ status }: { status: string }) {
	return (
		<span
			className={clsx(
				"inline-flex items-center rounded-full px-2 py-1 text-xs",
				{
					"bg-gray-100 text-gray-500": status === "pending",
					"bg-green-500 text-white": status === "paid",
				}
			)}
		>
			{status === "pending" ? (
				<Fragment>
					Pending
					<ClockIcon className="ml-1 w-4 text-gray-500" />
				</Fragment>
			) : null}
			{status === "paid" ? (
				<Fragment>
					Paid
					<CheckIcon className="ml-1 w-4 text-white" />
				</Fragment>
			) : null}
		</span>
	);
}
