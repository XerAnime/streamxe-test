import styles from "./footer.module.css";

export default async function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.FooterLeftContainer}>
				<a
					href="https://www.facebook.com/profile.php?id=100069572806122"
					target="_new"
				>
					Facebook
				</a>
				<a
					href="https://github.com/Xerabmulac"
					target="_new"
				>
					Github
				</a>
			</div>

			<div className={styles.FooterRightContainer}>
				<a
					style={{ color: "#EBCB8B" }}
					href="/"
				>
					Vercel
				</a>
				<a
					style={{ color: "	#A3BE8C" }}
					href="/"
				>
					Netlify
				</a>
			</div>
		</div>
	);
}
