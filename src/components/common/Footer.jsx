export default function Footer() {
  return (
    <footer className="h-12 bg-white border-t border-stone-200 px-8 flex items-center justify-between font-mono text-[10px] text-content-body shrink-0">
      <div>Himalaya Trails Internal Management System</div>
      <div>&copy; {new Date().getFullYear()} — All Rights Reserved</div>
    </footer>
  );
}