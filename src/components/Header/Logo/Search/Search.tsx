import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'

import style from '@/components/Header/Logo/Search/Search.module.scss'

const Search = () => {
  return (
    <div className={style.search}>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        fullWidth
        id={'standard-search'}
        label={'Название запроса'}
        type={'search'}
        variant={'outlined'}
      />
    </div>
  )
}

export default Search
