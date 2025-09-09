export default function handler(req, res) {
  // Domain-Weiterleitung von vercel.app zu franke-motorsport.de
  if (req.headers.host?.includes('vercel.app')) {
    const newUrl = `https://franke-motorsport.de${req.url}`;
    return res.redirect(301, newUrl);
  }
  
  res.status(404).json({ message: 'Not Found' });
}
