Filters
Jugadores. 
# Filtros simples
*?filter[where][edad][gte]=25  //gte = greater than or equal*
*?filter[where][edad][lte]=25  //lte = less than or equal*
*?filter[where][posicion]=delantero*
# Filtros compuestos
*?filter[where][and][0][edad][gte]=20&filter[where][and][1][posicion]=delantero*
# Querys de ordenamiento 
*?filter[order]=edad*
*?filter[order]=edad%20desc* // Ordén invertido
*?filter[where][posicion]=delantero&filter[order]=edad%20desc*
# Query con inclusión o exclusión de de campos
*?filter[fields][estado]* // Exclusión campo estado
*?filter[fields][estado]=true* // Mostrar solo el campo estado
*?filter[fields][edad]&filter[fields][id]* // Exclusión de multiples campos
*?filter[fields][apodo]&filter[fields][id]&filter[order]=edad*
*?filter[fields][id]&filter[order]=edad&filter[where][estado]=true*
# Filtro para incluir un modelo relacionado
*?filter[include][reviews]=author*
*?filter[include][reviews]=author&filter[limit]=2*
# Filtro con paginación y salto 
*?filter[limit]=3* // Establece un limite de numero de resultados
*?filter[limit]=6&filter[skip]=3* // Muetra 6 resultados saltando los 3 primeros
*?filter[where][edad][gte]=24&filter[limit]=2*
*?filter[order]=edad&filter[skip]=2*
# Querys con alias. Los scopes se definen en el modelo
"scopes":{
    "novatos": {"where":{"edad":{ "lt":"25" }}},
    "veteranos": {"where":{"edad":{ "gte":"25" }}},
    "activos": {"where":{"estado":true}}
  }

http://localhost:3000/api/jugadores/novatos
http://localhost:3000/api/jugadores/novatos/count
http://localhost:3000/api/jugadores/veteranos
http://localhost:3000/api/jugadores/activos
http://localhost:3000/api/jugadores/activos?filter[fields]