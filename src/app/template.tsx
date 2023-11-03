export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h1>Hello World</h1>
			{children}
		</div>
	);
}

// Template akan mereset semua children, alias dia akan membuat intansi baru setiap kali dipanggil,
// jadi jika kita set state pada template, maka dia tidak akan membawa nilai ketika kita berpindah route.

// Layouts akan membawa nilai state yang diberikan ke halaman yang ada di dalamnya.