export type Curso = {
  data_criacao: Date;
  nome_curso: string;
  descricao: string;
  categoria: string;
  id: number;
};

export type UserData = {
  data: User[];
};

export type User = {
  Id: string;
  FirstName: string;
  LastName?: string;
  DateOfBirth?: string;
  Address?: {
    HouseNumber?: number;
    Street?: string;
    State?: string;
    ZipCode?: string;
    Country?: string;
  };
};
