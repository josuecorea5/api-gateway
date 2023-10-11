export enum RabbitMQ {
  PartidosPoliticosQueue = 'partidos_politicos',
  CandidatosPoliticosQueue = 'candidatos_politicos',
  CentrosVotacionQueue = 'centro_votacion',
  JuntaReceptoraVotosQueue = 'junta_receptora_votos',
  PersonaNaturalQueue = 'persona_natural',
  DestinoSufragioQueue = 'destino-sufragio'
}

export enum PartidosPoliticosMSG {
  CREATE = 'CREATE_PARTIDO_POLITICO',
  UPDATE = 'UPDATE_PARTIDO_POLITICO',
  DELETE = 'DELETE_PARTIDO_POLITICO',
  FIND_ALL = 'FIND_PARTIDOS_POLITICOS',
  FIND_ONE = 'FIND__PARTIDO_POLITICO',
  CHANGE_LOGO = 'CHANGE_LOGO_PARTIDO_POLITICO',
}

export enum JuntaReceptoraVotosMSG {
  CREATE = 'CREATE_JUNTA_RECEPTORA_VOTOS',
  UPDATE = 'UPDATE_JUNTA_RECEPTORA_VOTOS',
  DELETE = 'DELETE_JUNTA_RECEPTORA_VOTOS',
  FIND_ALL = 'FIND_JUNTAS_RECEPTORA_VOTOS',
  FIND_ONE = 'FIND_JUNTA_RECEPTORA_VOTOS',
  GET_MEMBERS_BY_JRV = 'GET_MEMBERS_BY_JRV',
  GET_MEMBER_BY_ID = 'GET_MEMBER_BY_ID',
  GET_MEMBERS_BY_ID_PERSONA_NATURAL = 'GET_MEMBERS_BY_ID_PERSONA_NATURAL',  
  CREATE_MEMBER = 'CREATE_MEMBER',  
  UPDATE_MEMBER = 'UPDATE_MEMBER',
  DELETE_MEMBER = 'DELETE_MEMBER'
}

export enum CandidatosPoliticosMSG {
  CREATE = 'CREATE_CANDIDATO_POLITICO',
  UPDATE = 'UPDATE_CANDIDATO_POLITICO',
  DELETE = 'DELETE_CANDIDATO_POLITICO',
  FIND_ALL = 'FIND_CANDIDATOS_POLITICOS',
  FIND_ONE = 'FIND__CANDIDATO_POLITICO',
  CHANGE_PHOTO = 'CHANGE_PHOTO_CANDIDATO_POLITICO',
}

export enum CentrosVotacionMSG {
  CREATE = 'CREATE_CENTRO_VOTACION',
  UPDATE = 'UPDATE_CENTRO_VOTACION',
  DELETE = 'DELETE_CENTRO_VOTACION',
  FIND_ALL = 'FIND_CENTROS_VOTACION',
  FIND_ONE = 'FIND_CENTRO_VOTACION',
  SET_STATUS = 'SET_STATUS',
}

export enum JrvMiembrosMSG {
  CREATE = 'CREATE_JUNTA_RECEPTORA_VOTOS',
  UPDATE = 'UPDATE_JUNTA_RECEPTORA_VOTOS',
  DELETE = 'DELETE_JUNTA_RECEPTORA_VOTOS',
  FIND_ALL = 'FIND_JUNTAS_RECEPTORA_VOTOS',
  FIND_ONE = 'FIND_JUNTA_RECEPTORA_VOTOS',
}


export enum PersonaNaturalMSG {
  CREATE = 'CREATE_PERSONA_NATURAL',
  FIND_ALL = 'FIND_PERSONA_NATURALES',
  FIND_ONE = 'FIND__PERSONA_NATURAL',
 
}

export enum DestinoSufragioMSG {
  CREATE = 'CREATE_DESTINO_SUFRAGIO',
  UPDATE = 'UPDATE_DESTINO_SUFRAGIO',
  DELETE = 'DELETE_DESTINO_SUFRAGIO',
  FIND_ALL = 'FIND_DESTINOS_SUFRAGIO',
  FIND_ONE = 'FIND_DESTINO_SUFRAGIO',
  SET_STATUS_VOTE = 'SET_STATUS_VOTE',
  FIND_BY_DUI = 'FIND_BY_DUI'
}