import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
                <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>

                <div className='flex gap-4'>
                    Postagens
                    Temas
                    Cadastrar tema
                    Perfil
                    Sair
                </div>
            </div>
        </>
    )
}

export default Navbar
