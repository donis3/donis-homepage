"use client";
import React, { FC, FormEvent, useEffect, useRef, useState } from "react";
import {
	FaCheck,
	FaCopy,
	FaPaperPlane,
	FaSpinner,
	FaTimes,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

type EmailStatus = "loading" | "success" | "error" | undefined;
type ContactProps = {};

const Contact: FC<ContactProps> = () => {
	const [copyAvailable, setCopyAvailable] = useState(true);
	const [copyFeedback, setCopyFeedback] = useState("");
	const [emailStatus, setEmailStatus] = useState<EmailStatus>(undefined);
	const formRef = useRef<HTMLFormElement>(null);
	const devmail = [
		process.env.NEXT_PUBLIC_DEV_MAIL_USER,
		process.env.NEXT_PUBLIC_DEV_MAIL_PROVIDER,
	];

	function handleCopy() {
		if (!copyAvailable) return;
		try {
			navigator.clipboard.writeText(devmail.join("@"));
			setCopyFeedback("Copied");
			setTimeout(() => {
				setCopyFeedback("");
			}, 1000);
		} catch (error) {}
	}

	useEffect(() => {
		if (typeof navigator.clipboard == "undefined") {
			setCopyAvailable(false);
		} else {
			setCopyAvailable(true);
		}
	}, []);

	/**
	 * When email status changes, remove the feedback after a duration
	 */
	useEffect(() => {
		if (!emailStatus) return;

		const timeoutId = setTimeout(() => {
			setEmailStatus(undefined);
		}, 5000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [emailStatus]);

	/**
	 * Handle form submit event using emailJS
	 * @param e
	 */
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) return;
		if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) return;
		if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) return;

		if (formRef.current instanceof HTMLFormElement) {
			setEmailStatus("loading");
			emailjs
				.sendForm(
					process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
					process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
					formRef.current,
					process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
				)
				.then(
					(result) => {
						console.log(result.text);
						setEmailStatus("success");
					},
					(error) => {
						setEmailStatus("error");
						console.log(error.text);
					},
				);
		}
	};

	return (
		<div className="mx-auto  w-full max-w-3xl  rounded-lg bg-white bg-opacity-50 py-4 px-4 ">
			<h2 className="mb-4 text-center text-3xl font-medium tracking-tight text-gray-900 ">
				Contact Me
			</h2>

			<p className="mb-8 text-center font-light text-gray-800 sm:text-xl lg:mb-16">
				Please feel free to send me a message using the form below. You
				may also directly contact me at{" "}
				{copyAvailable ? (
					<span className="font-normal">{devmail.join("@")}</span>
				) : (
					<Link
						href={`mailto:${devmail.join("@")}`}
						target="_blank"
						className="font-normal">
						{devmail.join("@")}
					</Link>
				)}
				{/* Mobile devices might not support copy clipboard */}
				{copyAvailable && (
					<button
						type="button"
						aria-label="Copy email to clipboard"
						className="px-1 text-sm opacity-50 hover:opacity-100"
						onClick={handleCopy}>
						<FaCopy className="inline-block text-sm" />{" "}
						<span className="text-green-600">{copyFeedback}</span>
					</button>
				)}
			</p>
			<form
				ref={formRef}
				className="flex flex-col space-y-8"
				onSubmit={handleSubmit}>
				<div>
					<label
						htmlFor="user_email"
						className="mb-2 block text-sm font-medium text-gray-900 ">
						Your email
					</label>
					<input
						type="email"
						id="user_email"
						name="user_email"
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 shadow-sm "
						placeholder="you@gmail.com"
						required
					/>
				</div>
				<div>
					<label
						htmlFor="subject"
						className="mb-2 block text-sm font-medium text-gray-900 ">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						className=" block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-base text-gray-900 shadow-sm "
						placeholder="Subject of your email"
						required
					/>
				</div>
				<div className="sm:col-span-2">
					<label
						htmlFor="message"
						className="mb-2 block text-sm font-medium text-gray-900 ">
						Your message
					</label>
					<textarea
						id="message"
						name="message"
						rows={6}
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm text-base"
						required></textarea>
				</div>
				<div className="w-full flex items-center justify-center md:justify-start">
					<ReCAPTCHA
						sitekey={
							process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY ?? ""
						}
					/>
				</div>
				<div className="flex w-full flex-col items-center gap-4 md:flex-row">
					<button
						type="submit"
						className="flex  w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-4 md:w-fit">
						<FaPaperPlane /> Submit
					</button>
					<MailResponse status={emailStatus} />
				</div>
			</form>
		</div>
	);
};

export default Contact;

function MailResponse({ status }: { status: EmailStatus }) {
	switch (status) {
		case "success":
			return (
				<p className="text-sm text-green-600">
					<FaCheck className="inline-block" /> Your message has been
					successfully sent!
				</p>
			);

		case "error":
			return (
				<p className="text-sm text-red-600">
					<FaTimes className="inline-block" /> An error ocurred while
					sending your message.
				</p>
			);

		case "loading":
			return (
				<p className="text-sm text-gray-500">
					<FaSpinner className="inline-block animate-spin" /> Sending
					Message
				</p>
			);

		default:
			return <></>;
	}
}
