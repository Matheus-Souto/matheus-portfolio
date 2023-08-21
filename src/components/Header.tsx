export const Header = () => {
    return (
        <nav className="flex justify-between mx-auto py-7 shadow-lg bg-white px-12">
            <div>
                <h3 className="font-bold text-xl cursor-pointer text-gray-800">Matheus.dev</h3>
            </div>
            <div>
                <ul className="flex gap-6 text-lg font-semibold text-gray-800/80">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                </ul>
            </div>
        </nav>
    );
}