import Link from "next/link";

export default function DonsraadTerms() {
	return (
		<>
			<p>
				By accessing, downloading, or executing Donsraad, you agree to the
				following terms:
			</p>
			<ol>
				<li>
					<strong>Educational &amp; Portfolio License.</strong> Donsraad is
					provided solely as a personal, non-commercial portfolio
					demonstration. All rights to the original code, branding, and
					name remain with Deniz Özkan (donis.dev). You may not
					commercialize, redistribute for profit, or claim ownership of
					this project.
				</li>
				<li>
					<strong>Acknowledgment of TOS Violations.</strong> You
					acknowledge that this tool automates client inputs and screen
					reading, which violates Funcom&apos;s terms of service. You agree
					that the software is not intended to be used, and you assume 100%
					of the risk if you ignore this warning.
				</li>
				<li>
					<strong>Complete Rejection of Liability.</strong> To the maximum
					extent permitted by law, the author shall not be held liable for
					any direct, indirect, incidental, or consequential
					damages—including game account actions, bans, data loss, or
					system issues—arising from the use or misuse of this software.
				</li>
				<li>
					<strong>No Support or Maintenance.</strong> As a completed hobby
					project, Donsraad comes with no promise of support, feature
					updates, bug fixes, or maintenance when Dune: Awakening or
					Windows updates break functionality.
				</li>
				<li>
					<strong>Local Data Storage.</strong> All profiles, target
					settings, and stats are written locally as JSON files alongside
					the executable. The software does not harvest, transmit, or store
					personal credentials or telemetry remotely.
				</li>
				<li>
					<strong>Acceptance.</strong> If you do not agree to these terms,
					immediately close, delete, and refrain from executing Donsraad.
				</li>
			</ol>
			<p>© 2026 Deniz Özkan. All rights reserved.</p>
			<p>
				<Link href="/projects/donsraad">
					https://donis.dev/projects/donsraad
				</Link>
			</p>
		</>
	);
}
