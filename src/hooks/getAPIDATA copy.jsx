import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetAPIDATACOPY(sorvete) {
    const [sorveteData, setSorveteData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                // Busca apenas sorvetes cujo nome contenha exatamente o termo pesquisado
                const response = await axios.get(`http://localhost:3000/iceCreams?name_like=${encodeURIComponent(sorvete)}`);
                
                if (response.status === 200 && response.data.length > 0) {
                    // response.data → é a lista de sorvetes retornada pela API.
                    // .filter(...) → percorre essa lista e retorna apenas os itens que atendem à condição dentro da função.
                    // item.name.toLowerCase() → converte o nome do sorvete para letras minúsculas, garantindo que a busca não seja sensível a maiúsculas / minúsculas.
                    // .includes(sorvete.toLowerCase()) → verifica se o nome do sorvete contém a palavra pesquisada, também convertida para minúsculas.
                    const filteredResults = response.data.filter(item =>
                        item.name.toLowerCase().includes(sorvete.toLowerCase())
                    );
                    setSorveteData(filteredResults);
                } else {
                    setSorveteData([]);
                    setError("Nenhum sorvete encontrado");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [sorvete]);

    return { sorveteData, loading, error };
}
