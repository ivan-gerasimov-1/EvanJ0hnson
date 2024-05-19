import styles from './index.module.css';

export const config = {
	unstable_runtimeJS: false,
};

export default function Index() {
	return (
		<main>
			<div className={styles.description}>
				<div className={styles.mainPhotoContainer}>
					<img
						className={styles.mainPhoto}
						src="/ivan-gerasimov_photo.webp"
						alt="Ivan Gerasimov"
						width="130"
						height="130"
					/>
				</div>

				<div>
					<h1 className={styles.name}>Ivan Gerasimov</h1>

					<section className={styles.section}>
						Fullstack JavaScript developer
					</section>
				</div>
			</div>

			<section className={styles.profileLinksContainer}>
				<a
					className={styles.profileLink}
					href="https://linkedin.com/in/ivan-gerasimov"
					target="_blank"
					rel="noopener"
					aria-label="LinkedIn profile"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 382 382"
					>
						<path
							fill="currentColor"
							d="M347.44 0H34.56A34.56 34.56 0 000 34.55v312.9A34.56 34.56 0 0034.55 382h312.9A34.56 34.56 0 00382 347.44V34.56A34.56 34.56 0 00347.44 0zM118.22 329.84c0 5.56-4.5 10.06-10.06 10.06h-42.8c-5.56 0-10.06-4.5-10.06-10.06V150.4c0-5.55 4.5-10.05 10.06-10.05h42.8c5.55 0 10.06 4.5 10.06 10.05v179.44zm-31.46-206.4a40.67 40.67 0 110-81.34 40.67 40.67 0 010 81.33zM341.9 330.64c0 5.11-4.14 9.25-9.25 9.25h-45.93a9.25 9.25 0 01-9.25-9.25V246.5c0-12.56 3.69-55.03-32.8-55.03-28.32 0-34.06 29.07-35.21 42.11v97.08c0 5.11-4.14 9.25-9.25 9.25H155.8a9.25 9.25 0 01-9.25-9.25V149.6c0-5.1 4.14-9.24 9.24-9.24h44.43c5.1 0 9.25 4.14 9.25 9.24v15.66c10.5-15.76 26.1-27.91 59.3-27.91 73.56 0 73.14 68.71 73.14 106.47v86.84z"
						/>
					</svg>
				</a>

				<a
					className={styles.profileLink}
					href="https://github.com/ivan-gerasimov-1"
					target="_blank"
					rel="noopener"
					aria-label="GitHub profile"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 16 16"
					>
						<path
							fill="currentColor"
							d="M8 0a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0016 8a8 8 0 00-8-8z"
						/>
					</svg>
				</a>
			</section>

			<section className={styles.section}>
				<a className={styles.link} href="mailto:contact@gerasimov.pw">
					contact@gerasimov.pw
				</a>
			</section>
		</main>
	);
}
