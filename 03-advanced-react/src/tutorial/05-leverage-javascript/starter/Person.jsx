import avatar from '../../../assets/default-avatar.svg'

export function Person({name, nickName, images}) {
  return <div>
    <h4>{name}</h4>
    <h5>Nickname: {nickName || 'ShakeAndBake'}</h5>
    <img src={images?.[0].small.url || avatar}  style={{width: '100px'}}/>
  </div>;
}
  