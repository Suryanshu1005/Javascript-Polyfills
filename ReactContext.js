const ThemeContext = createContext(undefined);

export const ThemeProvider = (children) => {
    const [theme, setTheme] = useState('light')
    
    const toogleTheme = () => {
        setTheme(prevTheme => prevTheme ? 'light' : 'dark')
    }
    
    return (
       <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
        </ThemeContext.Provider>
      )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    
    return context;
}

