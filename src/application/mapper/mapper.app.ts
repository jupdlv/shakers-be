
//TODO: Mover a dominio, solo tiene que afectar a negocio
export abstract class MapperOrmDomain<TOrm, TDom> {
  abstract fromOrmToDomain(entity: TOrm): TDom;
  abstract fromDomainToOrm(entity: TDom): TOrm;
}

export abstract class MapperDtoDomain<TDto, TDom> {
  abstract fromDtoToDomain(dto: TDto): TDom;
  abstract fromDomainToDto(domain: TDom): TDto;
}