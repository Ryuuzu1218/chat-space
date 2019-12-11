## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:false,unique:true|
|email|string|null:false,unique:true|
|nickname|string|null:false,unique:true|
|password|string|null:false|
# アソシエーション
- has_many:messages
- has_many:groups, through: :user_group
- has_many:user_group


## messageテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null:false|
|image|string|null:false|
|user_id|integr|null:false|
|group_id|integer|null:false|
# アソシエーション
- belongs_to :user
- belongs_to :group


## groupテーブル

|Column|Type|Options|
|------|----|-------| 
|groupname|string|null:false|
|user_id|integer|null:false|
|message_id|integer|null:false|
# アソシエーション
- has_many :users, through: :user_group
- has_many :user_group
- has_many :messages


## user_groupテーブル

|Column|Type|Options|
|------|----|-------|
|position|string|null:false|
|user_id|integer|null:false|
|group_id|integer|null:false|
# アソシエーション
- belongs_to :user
- belongs_to :group