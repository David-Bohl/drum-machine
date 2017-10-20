'use strict'

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('beats', {
        title: {
            type: DataTypes.STRING,
            unique: 'compositeIndex',
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        beat: {
            type: DataTypes.ARRAY(DataTypes.Boolean),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Post.associate = (models) => {
        models.Post.belongsTo(models.user);
    }

    return Post;
};