import { Model, Sequelize, DataTypes, ModelStatic, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, NOW } from 'sequelize'




export const USER_TABLET = 'user'





export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>
  declare name: string
  declare email: string
  declare password: string
  declare phone: string
  declare status: boolean
  declare sessionActive: boolean
  declare address: string
  declare recoveryToken: string | null
  

  // timestamps!
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
  // declare readonlydeletedAt!: Date // activar paranoid



  //methods
  static associate() {
    //models associate
    
  }
  
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLET,
      modelName: 'User',
      timestamps: true
    }
  }

}


export const initUser = (sequelize: Sequelize) => {
  return User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      sessionActive: {
        field: 'session_active',
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      recoveryToken: {
        allowNull: true,
        field: 'recovery_token',
        type: DataTypes.STRING,
      },
      
      phone: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: NOW
      }
    }, User.config(sequelize)
  )
}




export default User
