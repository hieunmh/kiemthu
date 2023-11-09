import NavItem from "./NavItem"

const navItems = [
    {
        label: 'Forms',
        path: '/forms',
        dataTest: 'nav-forms'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem 
                    key={item.label} 
                    label={item.label} 
                    path={item.path} 
                    dataTest={item.dataTest}
                    />
                ))
            }
        </ul>
    )
}