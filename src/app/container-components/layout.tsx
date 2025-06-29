interface Children{
    children:React.ReactNode
}

export default function Layout(e:Children){
    return(
        <>
            {e.children}
        </>
    )
}